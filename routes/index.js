var express = require('express');
var router = express.Router();
var AWS = require('aws-sdk');

let awsConfig = {
  "region": "us-east-2",
  "endpoint": "https://dynamodb.us-east-2.amazonaws.com"
};

if(process.env.NODE_ENV === 'development'){
  let id = process.env.DEV_ACCESS_ID,
      key = process.env.DEV_ACCESS_KEY;
  awsConfig.credentials = new AWS.Credentials(id, key);
  console.log("got key from env");
}else{
  console.error("aint");
}

AWS.config.update(awsConfig);
const dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10'});

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/environments', (req, res) => {
  let params = { TableName: "Environments", Limit: 100 };

  dynamodb.scan(params, (err, data) => {
    if(err) throw new Error(err);
    else {
      res.send(data).status(200);
    }
  });
});

router.put('/environment/:key', (req, res) => {
  let params = {
    TableName: 'Environments',
    Key: {
      EnvironmentID: { N: req.params.key.toString() }
    },
    ExpressionAttributeNames: {
       "#BE": "Backend",
       "#FE": "Frontend",
       "#ED": "EnvironmentDescription"
    },
    UpdateExpression: "set #BE = :b, #FE=:f, #ED=:d",
    ExpressionAttributeValues:{
        ":b": { S: req.body.backend},
        ":f": { S: req.body.frontend},
        ":d": { S: req.body.desc}
    },
    ReturnValues:"UPDATED_NEW"
  };

  dynamodb.updateItem(params, (err, data) => {
    if(err) throw new Error(err);
    else {
      console.log("UpdateItem succeeded:\n\n\n", JSON.stringify(data, null, 2));
      res.send(data);
    }
  });

});

module.exports = router;

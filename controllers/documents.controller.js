const DynamodbService = require('../services/dynamodb.service');

const tableName = 'documents';

DocumentsController = {
  getDocumentsFromTable: (req, res) => {
    try {
      DynamodbService.getDocumentsFromTable(tableName).then((resp) => {
        res.status(200).send(resp);
      }, (error) => {
        res.status(404).send('Document not found');
      })
    } catch (error) {
      res.status(500).send(error);
    }
  },

  getDocumentFromTable: (req, res) => {
    try {
      DynamodbService.getDocumentFromTable(tableName, req.params.documentId).then((resp) => {
        res.status(200).send(resp);
      }, (error) => {
        res.status(404).send('Document not found');
      })
    } catch (error) {
      res.status(500).send(error);
    }
  },
  
  addDocumentToTable: (req, res) => {
    try {
      DynamodbService.addDocumentToTable(tableName, req.body).then((resp) => {
        res.status(200).send(resp);
      }, (error) => {
        res.status(405).send('Invalid input');
      });
    } catch (error) {
      res.status(500).send(error);
    }
  }
  
}

module.exports = DocumentsController;

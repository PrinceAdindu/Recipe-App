
const express = require('express');
const app = express();
const port = 3000;

app.get('/api/programs', (req, res) => {
  const programs = [
    {id: 1, name: 'Software Development'},
    {id: 2, name: 'Cybersecurity'},
    {id: 3, name: 'Salesforce'},
  ];
  res.send(programs);
});

app.get('/api/users', (req, res) => {
  const users = [
    {id: 1, name: 'Terry'},
    {id: 2, name: 'Perry'},
    {id: 3, name: 'Jerry'},
  ];
  res.send(users);
});

app.get('/', (req, res) => {
  res.send("Welcome to the Recipe App Home Page, where interesting delicacies are made");
});

app.listen(port, () => {
  console.log(`Recipe app is listening on ${port}`);
});

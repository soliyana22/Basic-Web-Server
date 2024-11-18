const express = require('express');
const app = express();
const name = "";
const hobby = {
    activity: ""
};
const dream = "";
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server listening on port ${port}`));
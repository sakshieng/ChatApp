const express = require(`express`);
const axios = require(`axios`);
const app = express();
const port = 5000;

app.use(express.json());

const getData = async()=>{
    const res = await axios.get('https://codeforces.com/api/contest.list?');
    const contests = res.data.result;
    const date = new Date();
    console.log(date);
    const filteredContest = contests.filter((item)=>{
        return item.phase === "BEFORE"
    })
    // console.log(filteredContest);

    const newContest = [];
    filteredContest.map((item)=>{
        const {name,type} = item;
        const timeLeft = Math.abs(item.relativeTimeSeconds/3600);
        newContest.push({name,type,timeLeft});
    })
    console.log(newContest);
}
getData();

app.listen(port,()=>{
    console.log('App is listening at port 5000');
})
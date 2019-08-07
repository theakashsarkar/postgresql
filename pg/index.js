const express = require('express');
const db      = require('./database');
const bp      = require('body-parser');

const  app    = express();

app.use(bp.json());
app.post('/task',(req,res)=>{
    if(req.body.task){
        db.task.create({
            description:req.body.task
        }).then(e=>{
            res.json({
                message:"Task added to database"
            })
        }).catch(er=>{
            res.json({
                error:true,
                message:"Task could not be added"
            }).status(500);
        })
    }
    else{
        res.json({
            error:true,
            message:"Please provide task name"
        }).status(400);
    }
})
app.get('/tasks',(req,res)=>{
    db.Task.findAll()
    .then(tasks =>{
        res.json({
            data:tasks
        })
    }).catch(error =>{
        res.json({
            error:true,
            message:"Tasks listing error"
        }).status(400)
    })
})
app.listen(4000);
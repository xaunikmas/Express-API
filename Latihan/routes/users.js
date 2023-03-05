import express from "express";

const router = express.Router ();
// buat inisialisasi router yg berasal dari express.Router (fungsi routing dari express)
// express.Router adalah function dari express utk routing

const users = [
    {
        firstName : "niko",
        lastName : "novianto",
        age : 35,
        occupation : "software developer"
    },
    {
        firstName : "avner",
        lastName : "goldmann",
        age : 45,
        occupation : "data analyst"
    },

    {
        firstName : "aaron",
        lastName : "Schuberg",
        age : 40,
        occupation : "network engineer"
    }
]

router.get("/", (req, res)=> 
{
    res.send(users);
    // res.send ("BERHASIL!!!!");
});
// function router.get "/" routing ke seluruh folder/path /users

router.post("/", (req, res)=> {
    res.send("udah bisa!");
} );
// router.post method untuk menambah data 


export default router;
// export default router supaya bisa ngeroute ke index.js



const express = require("express");
const app = express();
let port = "8080";
const path = require("path");
const { v4: uuid } = require('uuid');
const mysql = require('mysql2');
const { Script } = require("vm");
const methodOverride = require("method-override");

app.use (methodOverride("_method"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set("view engin", "ejs");
app.set("views", path.join(__dirname, "views"));

app.set(express.static(path.join(__dirname, "public")));

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'blood_bank',
    password: 'Rehan@123'
  });

//Home page APIs
app.get("/bloodbank", (req, res) => {
    res.render("index.ejs");
    console.log("Requst is exepted");
});


//Signin form APIs
app.get("/bloodbank/signin", (req, res) => {
    res.render("signin.ejs");
    console.log("signin is working");
});

//Login form APIs
app.get("/bloodbank/login", (req, res) => {
    res.render("login.ejs");
    console.log("request exsepted for login form");
});

let emaila;
let usernamea;

//Post request redirect for bloodbank
app.post("/bloodbank", (req, res) => {

    // let id = uuid();
    let { username, mobile, age, email, password, bloodgroup, bag,  gender, address } = req.body;

    if ( username,  mobile, age, email, password, bloodgroup, bag ,gender, address)  {
        let data = req.body;
        let userdata = [data.username, data.mobile, data.age, data.email, data.password, data.bloodgroup, data.gender, data.address, data.bag];
        console.log(userdata);
        usernamea = username;
        emaila = email;
        let q =  `INSERT INTO users VALUE(?,?,?,?,?,?,?,?,?)`;

        try {
            connection.query(q, userdata, (err, result) => {
                if (err) throw err;
                console.log(result);
            });
        } catch (err) {
            console.log(err);
        }
        res.redirect(`/bloodbank/home`);

    } else {
        console.log("post request workin else");
        console.log(req.body);
        let password = req.body.password;
        emaila = req.body.email;
        
        let q = `SELECT * FROM users WHERE email='${email}'`;
        try {
            connection.query(q, (err, result) => {
                if (err) throw err;
                console.log(result);
                if(result[0] == null) {
                    res.render("login3.ejs");
                } else {
                    console.log(result);
                    usernamea = result[0].username;
                    if(result[0].password === password) {
                        res.redirect(`/bloodbank`);
                        

                    } else {
                        res.render("login2.ejs");
                    }
                }
            });
        } catch (err) {
            console.log(err);
        }

    } 
});

//quantity post 
app.post("/bloodbank/quantity", (req, res) => {
    res.send(req.bag, req.usernamea, req.email);
})


app.get("/bloodbank/register", (req, res) => {
    res.render("register2.ejs");
})

//Post request redirect for bloodbank
app.post("/bloodbank/register", (req, res) => {

    // let id = uuid();
    let { username, email, password } = req.body;
    console.log(username, email, password );

    if ( username != undefined)  {
        console.log(username, email, password );
        let data = req.body;
        let userdata = [data.username, data.email, data.password];
        console.log(userdata);
        usernamea = username;
        emaila = email;
        console.log("Regiser wala h");
        let q =  `INSERT INTO simpuser VALUE(?,?,?)`;

        try {
            connection.query(q, userdata, (err, result) => {
                if (err) throw err;
                console.log(result);
            });
        } catch (err) {
            console.log(err);
        }
        res.redirect(`/bloodbank/home`);

    } else {
        console.log("post request workin else");
        console.log(req.body);
        let password = req.body.password;
        console.log(req.body.email);
        emaila = req.body.email;
        
        let q = `SELECT * FROM simpuser WHERE email='${email}'`;
        try {
            connection.query(q, (err, result) => {
                if (err) throw err;
                console.log(result);
                if(result[0] == null) {
                    res.render("login6.ejs");
                } else {
                    console.log(result);
                    usernamea = result[0].username;
                    if(result[0].password === password) {
                        res.redirect(`/bloodbank/home`);
                        

                    } else {
                        res.render("login5.ejs");
                    }
                }
            });
        } catch (err) {
            console.log(err);
        }

    } 
});

app.get("/bloodbank/login4", (req, res) => {
    res.render("login4.ejs");
})

//aboutus
app.get("/bloodbank/about", (req, res) => {
    res.render("aboutus.ejs");
});


//contact
app.get("/bloodbank/contact", (req, res) => {
    res.render("contact.ejs");
})

//Need Blood
app.get("/bloodbank/search", (req, res) => {
    res.render("search.ejs");
});

app.post("/bloodbank/search", (req, res) => {
    let data = req.body;
    let bloodgroup = data.bloodgroup;
    let gender = data.gender;
    console.log(bloodgroup);
    console.log(gender);
    let q =  `SELECT * FROM users WHERE '${bloodgroup}'=bloodgroup AND '${gender}'=gender`;

        try {
            connection.query(q, (err, result) => {
                if (err) throw err;
                if (result[0] == null) {
                    console.log(result);
                    res.render("search2.ejs", {result} );
                } else {
                    console.log(result);
                    res.render("search3.ejs", {result} );
                }
            });
        } catch (err) {
            console.log(err);
        }

});

//Search3 Post
app.post("/bloodbank/search3/:email/:bag", (req, res) => {
    let { email, bag } = req.params;
    
    let q =  `SELECT * FROM users WHERE '${email}'=email`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.render("view2.ejs", {result} );
        });
    } catch (err) {
        console.log(err);
    }
});

//View2 Buy Now
app.post("/bloodbnak/view2/:email/:bag", (req, res) => {
    let { email, bag } = req.params;
    res.render("buy.ejs", {email, bag});
});

//Buy post
app.post("/blooodbank/buy/:email", (req, res) => {
    let { email } = req.params;
    let bag = req.body.bottal;
    console.log(bag, email);
    let q =  `SELECT * FROM users WHERE '${email}'=email`;

    try {
        connection.query(q, (err, result1) => {
            if (err) throw err;
            result1[0].bag = result1[0].bag - bag;
            let q = `UPDATE users SET bag='${result1[0].bag}' WHERE '${email}'=email`;
            try {
                connection.query(q, (err, result) => {
                    if (err) throw err;
                    console.log(result);
                    res.redirect(`/bloodbank/home`);
                });
            } catch (err) {
                console.log(err);
            }
        });
    } catch (err) {
        console.log(err);
    }
});

let email;

//home
app.get("/bloodbank/home", (req, res) => {
    res.render("home.ejs", {usernamea, emaila});
});

// sidebar
app.get("/bloodbank/view", (req, res) => {
                let q =  `SELECT * FROM users WHERE '${emaila}'=email`;

                try {
                    connection.query(q, (err, result) => {
                        if (err) throw err;
                        console.log(result);
                        res.render("view.ejs", {result} );
                    });
                } catch (err) {
                    console.log(err);
                }
});


//edit
app.get("/bloodbank/edit", (req, res) => {

    console.log(emaila);
    let q =  `SELECT * FROM users WHERE '${emaila}'=email`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result);
            res.render("edit.ejs", {result} );
        });
    } catch (err) {
        console.log(err);
    }
});

//Update Route
app.patch("/bloodbank/view", (req, res) => {
    let data = req.body;
    let username = data.username;
    let password = data.password;
    let mobile = data.mobile;
    let bloodgroup = data.bloodgroup;
    let gender = data.gender;
    let address = data.address;
    console.log(username, password, mobile, bloodgroup, gender, address);

    
    console.log(emaila);
    let q =  `SELECT * FROM users WHERE '${emaila}'=email`;

    try {
        connection.query(q, (err, result) => {
            if (err) throw err;
            console.log(result[0]);
            if(password != result[0].password) {
                res.send("Worng password Plase try agin");
            } else {
                let q =  `UPDATE users SET username='${username}', mobile='${mobile}', bloodgroup='${bloodgroup}', gender='${gender}', address='${address}' WHERE '${emaila}'=email`;

                try {
                    connection.query(q, (err, result) => {
                        if (err) throw err;
                        console.log(result);
                        usernamea = username
                        res.redirect(`/bloodbank/home`);
                    });
                } catch (err) {
                    res.redirect(`/bloodbank/edit`);
                    console.log(err);
                }
            }
        });
    } catch (err) {
        console.log(err);
        res.send("error aai h ");
    }
});

// Dash bord
app.get('/bloodbank/chart', (req, res) => {
    const sql = `
        SELECT bloodgroup, SUM(bag) AS totalBags FROM users GROUP BY bloodgroup

    `;
    connection.query(sql, (err, result) => {
        if (err) throw err;
        res.render('bloodgroup.ejs', { data: result });
    });
});

app.get('bloodbank/chart', (req, res) => {
    const query = 'SELECT bloodgroup, SUM(bag) AS totalBags FROM users GROUP BY bloodgroup';
    db.query(query, (err, results) => {
        if (err) {
            res.render('bloodgroup.ejs', { data: result });
        }
    });
});



//server
app.listen(port, (req, res) => {
    console.log("Server Working on port: 8080");
});
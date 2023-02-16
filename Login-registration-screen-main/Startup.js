
for (var i = 0; i < 1; i++)
{

  var users = [
        {
            "pl" : "admin",
            "lg" : "FallingDown",
            "pw" : "1536",
            "name" : "Falling Down"
        },
        {
            "pl" : "user",
            "lg" : "KateLops",
            "pw" : "1234",
            "name" : "Kate Lops"
        }
        
    ];

    localStorage.setItem('users', JSON.stringify(users));
}

    document.location.href = "Login.html";

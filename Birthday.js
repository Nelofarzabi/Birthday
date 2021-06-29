<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> javascript</title>
    <style>
        #h2 {
            margin-left: 37%;
            font-family: Arial, Helvetica, sans-serif;
            margin-top: 12%;
            color: #3a3a3a;
        }
        
        .input {
            margin-left: 41%;
            margin-top: 5px;
            margin-bottom: 7px;
            border-top: 3px #3a3a3a;
            border-left: 4px #3a3a3a;
            border-right: 5px #3a3a3a;
        }
        
        .input3 {
            margin-left: 41%;
            width: 13.2%;
            margin-top: 3px;
            background: #3a3a3a;
            border-radius: 5px;
            height: 30px;
        }
        
        p {
            margin-left: 41%;
            font-family: Arial, Helvetica, sans-serif;
        }
    </style>
</head>

<body>
    <h2 id="h2">Enter Your Birthday Date</h2>
    <input type="text" id="year" class="input" placeholder="Enter Your Year"><br>
    <input type="text" id="month" class="input" placeholder="Enter Your Month"><br>
    <input type="text" id="day" class="input" placeholder="Enter Your Day"><br>
    <button onclick="data()" class="input3">calculate </button>
    <p id="p"></p>
    <script>
        function data() {
            var x = new Date();
            var year = document.getElementById('year').value;
            var month = document.getElementById('month').value;
            var day = document.getElementById('day').value;
            var cul = x.getFullYear() - year;
            var m = x.getMonth() - month;
            var d = x.getDay() - day;
            document.getElementById('p').innerHTML = "your age is: " + " " + cul + "y" + m + "M" + "-" + d + "D";
        }
    </script>
</body>

</html>

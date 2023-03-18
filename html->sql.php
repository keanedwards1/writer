<?php
// Connect to database
$conn = mysqli_connect("localhost", "username", "password", "database_name");

// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Handle form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $poem = $_POST["poem"];

    // Insert poem into database
    $sql = "INSERT INTO poems (poem) VALUES ('$poem')";

    if (mysqli_query($conn, $sql)) {
        echo "Poem submitted successfully!";
    } else {
        echo "Error: " . $sql . "<br>" . mysqli_error($conn);
    }

    mysqli_close($conn);
}
?>


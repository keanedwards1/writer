<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  $writing = $_POST['writing'];
  if (!empty($writing)) {
    $file = fopen('writings.txt', 'a'); // Open file for appending
    fwrite($file, $writing . "\n"); // Write writing to file
    fclose($file); // Close file
    http_response_code(200); // Set response code to 200 OK
  } else {
    http_response_code(400); // Set response code to 400 Bad Request
  }
}

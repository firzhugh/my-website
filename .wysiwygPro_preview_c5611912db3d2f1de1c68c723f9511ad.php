<?php
if ($_GET['randomId'] != "5UNDxEHQ7vKfBaEBFvX_IXDZTgoH9uocD5bnPViou92KdZ7MOhW0hu5BLdTmEBEC") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  

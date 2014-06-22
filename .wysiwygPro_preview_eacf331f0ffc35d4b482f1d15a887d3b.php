<?php
if ($_GET['randomId'] != "G8A2D7HhYiiZiks4oBCCTraH8UDrg0renI0VBqoQbfH4KfCtqc7XenzRdQGdfkaW") {
    echo "Access Denied";
    exit();
}

// display the HTML code:
echo stripslashes($_POST['wproPreviewHTML']);

?>  

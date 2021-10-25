<?php

include 'db.php';

$id = $_GET['id'];

$up = mysqli_query($conn,"UPDATE bookings SET status='approved' WHERE id='$id'");
if($up){
    echo '<script> window.location="bookings.php"</script>';
}

else{

    echo '<script> 
    alert ("Failed to update");
    window.location="bookings.php"</script>;
    ';

}

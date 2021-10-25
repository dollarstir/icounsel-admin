$(document).ready(function () {

    $(".mnotify").load('check.php');
    $(".notiresut").load('check1.php');
    

    // swal({
    //     title: "Congrat's",
    //     text: "Counsellor added successful",
    //     type: "success",

    // }, function () {
    //     setTimeout(function () {
    //         window.location.reload();
    //     }, 1000);
    // });

    function rep(resp) {
        switch (resp) {
            case "counssuccess":
                swal({
                    title: "Congrat's",
                    text: "Counsellor added successful",
                    type: "success",

                }, function () {
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000);
                });

                break;
            case "adsuccess":
                swal({
                    title: "Congrat's",
                    text: "Admin added successful",
                    type: "success",

                }, function () {
                    setTimeout(function () {
                        window.location.reload();
                    }, 1000);
                });
                break;


            case "counsassign":
                swal({
                    title: "Congrat's",
                    text: "Counsellor assigned successfully",
                    type: "success",

                }, function () {
                    setTimeout(function () {
                        window.location = 'bookings.php';
                    }, 1000);
                });
                break;

            case "tupsuadded":
                swal({
                    title: "Congrat's",
                    text: "Tupsu successfuly added",
                    type: "success",

                }, function () {
                    setTimeout(function () {
                        window.location = 'view-tupsu.php';
                    }, 1000);
                });
                break;

            case "loginsuccess":
                swal({
                    title: "Congrat's",
                    text: "login successful",
                    type: "success",

                }, function () {
                    setTimeout(function () {
                        window.location = 'index.php';
                    }, 1000);
                });
                break;

            default:
                swal({
                    title: "Sorry",
                    text: resp,
                    type: "info",
                })
                break;
        }
    }

    $(".ccf").submit(function (ev) {
        ev.preventDefault();

        var cform = {

            url: "love.php?heart=addcounsellor",
            type: "post",
            data: new FormData(this),
            cache: false,
            contentType: false,
            processData: false,
            success: rep

        };

        $.ajax(cform);

    })

    $(".adf").submit(function (ev) {
        ev.preventDefault();

        var cform = {

            url: "love.php?heart=addadmin",
            type: "post",
            data: new FormData(this),
            cache: false,
            contentType: false,
            processData: false,
            success: rep

        };

        $.ajax(cform);

    })

    $(".assf").submit(function (ev) {
        ev.preventDefault();

        var cform = {

            url: "love.php?heart=assignc",
            type: "post",
            data: new FormData(this),
            cache: false,
            contentType: false,
            processData: false,
            success: rep

        };

        $.ajax(cform);

    })


    // adding tupsu
    $(".adtus").submit(function (ev) {
        ev.preventDefault();

        var cform = {

            url: "love.php?heart=addtus",
            type: "post",
            data: new FormData(this),
            cache: false,
            contentType: false,
            processData: false,
            success: rep

        };

        $.ajax(cform);

    })

    // login here

    $(".login").submit(function (ev) {
        ev.preventDefault();

        var cform = {

            url: "love.php?heart=mylogin",
            type: "post",
            data: new FormData(this),
            cache: false,
            contentType: false,
            processData: false,
            success: rep

        };

        $.ajax(cform);

    })

})
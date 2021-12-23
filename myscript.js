var data = document.getElementById("viewer");

function openJsonData() {

        $.getJSON("http://localhost:8080/datamahasiswajson", function(result){
            console.log(result)
            $.each(result, function(a){
                document.getElementById("viewer").innerHTML += "Nama : " + result[a].nama + "<br> NIM : " +
                result[a].nim + "<br> Alamat : " + result[a].alamat + "<br> Program Studi : " + result[a].programstudi 
                + "<br> Fakultas : " + result[a].fakultas + "<br> <br>"
            })
        })
    }
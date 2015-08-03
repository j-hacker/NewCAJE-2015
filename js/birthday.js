/**
 * Created by marcstober on 8/2/15.
 */

var hebrewMonths = ["Nisan", "Iyyar", "Sivan", "Tamuz", "Av", "Elul", "Tishrei", "Cheshvan", "Kislev", "Tevet", "Shvat", "Adar1", "Adar2"];

$(function() {
    $("button").click(function() {
        var query = {
            cfg: "json",
            g2h: 1,
            gy: $("#year").val(),
            gm: $("#month").val(),
            gd: $("#day").val()
        };
        //var url = "http://www.hebcal.com/converter/?cfg=json&gy=2011&gm=6&gd=2&g2h=1";
        var url = "http://www.hebcal.com/converter/?";
        $.get(url, query, function(data) {
            //alert(data.hebrew);
            $("#result").show("slow");
            $("#hebrew-date").text(data.hebrew);
            console.log(data);
            var hmn = hebrewMonths.indexOf(data.hm);
            var hd = data.hd;
            $("#verse").html("<a href='http://www.sefaria.org/Genesis." + hmn + "." + hd +"?lang=en&layout=block&sidebarLang=all'>Genesis " + hmn + ":" + hd + "</a>");
        });
    });
});

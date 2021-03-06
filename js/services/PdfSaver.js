'use strict';

var app = angular.module("coreAngular");

var PdfSaver = function(){
    return{
        save:function(resultSet){
            var doc = new jsPDF();
            var fonts = doc.getFontList();
            doc.setFontSize(21);
            doc.setFontType("bold")
            doc.text(70, 25, "CORE 34 Results");

            doc.setFontSize(14);
            doc.setFontType("italic");
            doc.text(25, 50, "Name:");
            doc.text(25, 60, "Date:");
            doc.text(25, 70, "Start:");
            doc.text(25, 80, "End:");

            doc.setFontType("normal");
            doc.text(50, 50, resultSet.Info.Name);
            doc.text(50, 60, getFormattedDay(resultSet.Info.StartTime));
            doc.text(50, 70, getFormattedHour(resultSet.Info.StartTime));
            doc.text(50, 80, getFormattedHour(resultSet.Info.EndTime));

            doc.setFontSize(16);
            doc.setFontType("bold");
            doc.text(25, 100, "Assessment:");

            doc.setFontType("normal");
            doc.text(70, 100, resultSet.Assessment);

            doc.setFontSize(19);
            doc.setFontType("normal");
            doc.rect(20, 120, 40, 15);
            doc.text(35, 130, "W");
            doc.rect(20, 135, 40, 15);
            doc.text(35, 145, resultSet.Points.WellBeing.toString());
            doc.rect(60, 120, 40, 15);
            doc.text(75, 130, "P");
            doc.rect(60, 135, 40, 15);
            doc.text(75, 145, resultSet.Points.Problems.toString());
            doc.rect(100, 120, 40, 15);
            doc.text(115, 130, "F");
            doc.rect(100, 135, 40, 15);
            doc.text(115, 145, resultSet.Points.Functioning.toString());
            doc.rect(140, 120, 40, 15);
            doc.text(155, 130, "R");
            doc.rect(140, 135, 40, 15);
            doc.text(155, 145, resultSet.Points.Risk.toString());

            doc.output('dataurlnewwindow');
        }
    }
};
var getFormattedDay = function(myDateTime){
    return  myDateTime.getDate()+ "-" +(myDateTime.getMonth() + 1) + "-" + myDateTime.getFullYear();
};
var getFormattedHour = function(myDateTime){
    return myDateTime.getHours() + ":" + myDateTime.getMinutes();
};
app.factory('PdfSaver', PdfSaver);
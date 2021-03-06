// ==UserScript==
// @name         jira-dashboard-userfilter
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Filter by User in JIRA dashboard
// @author       Rajendra Kumar U
// @include      http://jiraurlhere/secure/RapidBoard.jspa?rapidView=2*
// @grant        none
// ==/UserScript==

//window.addEventListener('DOMContentLoaded', function () {
window.addEventListener('load', function() {
    'use strict';
    // your code here
    
    var $ = window.jQuery;
    
    function showAllTasks(){
        $('.ghx-issue').each(function(){
           $(this).show();
        });
        //alert(usr);
    }
    
    
    function showTasks(){
        var usr = $('#usrs').val();
        showAllTasks();
        if(usr === ''){
           return;
        }
        $('.ghx-issue').each(function(){
           var img = $(this).find(".ghx-avatar-img");
            // console.log(img.attr("title"), "Assignee: " + usr);
            if(img.attr("title") != "Assignee: " + usr){
              $(this).hide();
           }
        });
        //alert(usr);
    }
    
    var users_list = [
                      "User name 1",
                      "User name 2",
                      "User name 3"
                     ];
    var users_len = users_list.length;
    var user_select_html = "<select id='usrs'>";
    user_select_html += "<option value=''>All</option>";
    for(var i=0; i<users_len;i++){
        user_select_html += "<option>" + users_list[i] + "</option>";
    }
    user_select_html += "</select>";
    
    
    $('#ghx-board-name').html($('#ghx-board-name').html() + user_select_html);
    
    $("#usrs").change(showTasks);

    
});
url = 'http://stats.nba.com/stats/commonallplayers/?LeagueId=00&Season=2016-17&IsOnlyCurrentSeason=1&callback=?';
var COMMONALLPLAYERS_PERSON_ID = 0;
var COMMONALLPLAYERS_DISPLAY_LAST_COMMA_FIRST = 1;
var COMMONALLPLAYERS_DISPLAY_FIRST_LAST = 2;
var COMMONALLPLAYERS_ROSTERSTATUS = 3;
var COMMONALLPLAYERS_FROM_YEAR = 4;
var COMMONALLPLAYERS_TO_YEAR = 5;
var COMMONALLPLAYERS_PLAYERCODE = 6;
var COMMONALLPLAYERS_TEAM_ID = 7;
var COMMONALLPLAYERS_TEAM_CITY = 8;
var COMMONALLPLAYERS_TEAM_NAME = 9;
var COMMONALLPLAYERS_TEAM_ABBREVIATION = 10;
var COMMONALLPLAYERS_TEAM_CODE = 11;
var COMMONALLPLAYERS_GAMES_PLAYED_FLAG = 12;
var COMMONPLAYERINFO_PERSON_ID = 0;
var COMMONPLAYERINFO_FIRST_NAME = 1;
var COMMONPLAYERINFO_LAST_NAME = 2;
var COMMONPLAYERINFO_DISPLAY_FIRST_LAST = 3;
var COMMONPLAYERINFO_DISPLAY_LAST_COMMA_FIRST = 4;
var COMMONPLAYERINFO_DISPLAY_FI_LAST = 5;
var COMMONPLAYERINFO_BIRTHDATE = 6;
var COMMONPLAYERINFO_SCHOOL = 7;
var COMMONPLAYERINFO_COUNTRY = 8;
var COMMONPLAYERINFO_LAST_AFFILIATION = 9;
var COMMONPLAYERINFO_HEIGHT = 10;
var COMMONPLAYERINFO_WEIGHT = 11;
var COMMONPLAYERINFO_SEASON_EXP = 12;
var COMMONPLAYERINFO_JERSEY = 13;
var COMMONPLAYERINFO_POSITION = 14;
var COMMONPLAYERINFO_ROSTERSTATUS = 15;
var COMMONPLAYERINFO_TEAM_ID = 16;
var COMMONPLAYERINFO_TEAM_NAME = 17;
var COMMONPLAYERINFO_TEAM_ABBREVIATION = 18;
var COMMONPLAYERINFO_TEAM_CODE = 19;
var COMMONPLAYERINFO_TEAM_CITY = 20;
var COMMONPLAYERINFO_PLAYERCODE = 21;
var COMMONPLAYERINFO_FROM_YEAR = 22;
var COMMONPLAYERINFO_TO_YEAR = 23;
var COMMONPLAYERINFO_DLEAGUE_FLAG = 24;
var COMMONPLAYERINFO_GAMES_PLAYED_FLAG = 25;
var PLAYERGAMELOG_SEASON_ID = 0;
var PLAYERGAMELOG_PLAYER_ID = 1;
var PLAYERGAMELOG_GAME_ID = 2;
var PLAYERGAMELOG_GAME_DATE = 3;
var PLAYERGAMELOG_MATCHUP = 4;
var PLAYERGAMELOG_WL = 5;
var PLAYERGAMELOG_MIN = 6;
var PLAYERGAMELOG_FGM = 7;
var PLAYERGAMELOG_FGA = 8;
var PLAYERGAMELOG_FG_PCT = 9;
var PLAYERGAMELOG_FG3M = 10;
var PLAYERGAMELOG_FG3A = 11;
var PLAYERGAMELOG_FG3_PCT = 12;
var PLAYERGAMELOG_FTM = 13;
var PLAYERGAMELOG_FTA = 14;
var PLAYERGAMELOG_FT_PCT = 15;
var PLAYERGAMELOG_OREB = 16;
var PLAYERGAMELOG_DREB = 17;
var PLAYERGAMELOG_REB = 18;
var PLAYERGAMELOG_AST = 19;
var PLAYERGAMELOG_STL = 20;
var PLAYERGAMELOG_BLK = 21;
var PLAYERGAMELOG_TOV = 22;
var PLAYERGAMELOG_PF = 23;
var PLAYERGAMELOG_PTS = 24;
var PLAYERGAMELOG_PLUS_MINUS = 25;
var PLAYERGAMELOG_VIDEO_AVAILABLE = 26;
var FPTS_PTS = 1;
var FPTS_FG2A_FG2M = -1 / 3;
var FPTS_FG3A_FG3M = -0.5;
var FPTS_FTA_FTM = -0.5;
var FPTS_REB = 1;
var FPTS_AST = 1;
var FPTS_STL = 2;
var FPTS_BLK = 2;
var FPTS_PF = -1;
var FPTS_TOV = -2;
var max_games = 10;
var max_players = 10;
var myteam_players = new Array(max_players);
var common_player_info;
var REMOVE_MODE = 0;
var common_all_players_list;
var player_game_log;
var min_player;
var fpts_total_day = 0;
var fpts_total_week = 0;
var myteam_players_id = JSON.parse(localStorage.getItem("myteam_players_id"));
if (myteam_players_id == null) {
    myteam_players_id = [null, null, null, null, null, null, null, null, null, null];
    //myteam_players_id = [201939, null, null, null, 201939, null, null, 201939, null, null];
    localStorage.setItem("myteam_players_id", JSON.stringify(myteam_players_id));
}

function Player(common_player_info) {
    this.person_id = common_player_info[COMMONPLAYERINFO_PERSON_ID];
    this.first_name = common_player_info[COMMONPLAYERINFO_FIRST_NAME];
    this.last_name = common_player_info[COMMONPLAYERINFO_LAST_NAME];
    this.display_first_last = common_player_info[COMMONPLAYERINFO_DISPLAY_FIRST_LAST];
    this.display_last_comma_first = common_player_info[COMMONPLAYERINFO_DISPLAY_LAST_COMMA_FIRST];
    this.display_fi_last = common_player_info[COMMONPLAYERINFO_DISPLAY_FI_LAST];
    this.birthdate = common_player_info[COMMONPLAYERINFO_BIRTHDATE];
    this.school = common_player_info[COMMONPLAYERINFO_SCHOOL];
    this.country = common_player_info[COMMONPLAYERINFO_COUNTRY];
    this.last_affiliation = common_player_info[COMMONPLAYERINFO_LAST_AFFILIATION];
    this.first_name = common_player_info[COMMONPLAYERINFO_FIRST_NAME];
    this.height = common_player_info[COMMONPLAYERINFO_HEIGHT];
    this.weight = common_player_info[COMMONPLAYERINFO_WEIGHT];
    this.season_exp = common_player_info[COMMONPLAYERINFO_SEASON_EXP];
    this.jersey = common_player_info[COMMONPLAYERINFO_JERSEY];
    this.position = common_player_info[COMMONPLAYERINFO_POSITION];
    this.rosterstatus = common_player_info[COMMONPLAYERINFO_ROSTERSTATUS];
    this.team_id = common_player_info[COMMONPLAYERINFO_TEAM_ID];
    this.team_name = common_player_info[COMMONPLAYERINFO_TEAM_NAME];
    this.team_abbreviaton = common_player_info[COMMONPLAYERINFO_TEAM_ABBREVIATION];
    this.team_code = common_player_info[COMMONPLAYERINFO_TEAM_CODE];
    this.team_city = common_player_info[COMMONPLAYERINFO_TEAM_CITY];
    this.player_code = common_player_info[COMMONPLAYERINFO_PLAYERCODE];
    this.from_year = common_player_info[COMMONPLAYERINFO_FROM_YEAR];
    this.to_year = common_player_info[COMMONPLAYERINFO_TO_YEAR];
    this.dleague_flag = common_player_info[COMMONPLAYERINFO_DLEAGUE_FLAG];
    this.games_played_flag = common_player_info[COMMONPLAYERINFO_GAMES_PLAYED_FLAG];

    this.photo_url = "http://stats.nba.com/media/players/230x185/" + this.person_id + ".png";
    this.fpts_day;
    this.fpts_week;
    this.games = new Array(max_games);
    this.week;
}
function Game(player_game_log_index) {
    this.season_id = player_game_log_index[PLAYERGAMELOG_SEASON_ID];
    this.player_id = player_game_log_index[PLAYERGAMELOG_PLAYER_ID];
    this.game_id = player_game_log_index[PLAYERGAMELOG_GAME_ID];
    this.game_date = player_game_log_index[PLAYERGAMELOG_GAME_DATE];
    this.matchup = player_game_log_index[PLAYERGAMELOG_MATCHUP];
    this.wl = player_game_log_index[PLAYERGAMELOG_WL];
    this.min = player_game_log_index[PLAYERGAMELOG_MIN];
    this.fgm = player_game_log_index[PLAYERGAMELOG_FGM];
    this.fga = player_game_log_index[PLAYERGAMELOG_FGA];
    this.fg_pct = player_game_log_index[PLAYERGAMELOG_FG_PCT];
    this.fg3m = player_game_log_index[PLAYERGAMELOG_FG3M];
    this.fg3a = player_game_log_index[PLAYERGAMELOG_FG3A];
    this.fg3_pct = player_game_log_index[PLAYERGAMELOG_FG3_PCT];
    this.ftm = player_game_log_index[PLAYERGAMELOG_FTM];
    this.fta = player_game_log_index[PLAYERGAMELOG_FTA];
    this.ft_pct = player_game_log_index[PLAYERGAMELOG_FT_PCT];
    this.oreb = player_game_log_index[PLAYERGAMELOG_OREB];
    this.dreb = player_game_log_index[PLAYERGAMELOG_DREB];
    this.reb = player_game_log_index[PLAYERGAMELOG_REB];
    this.ast = player_game_log_index[PLAYERGAMELOG_AST];
    this.stl = player_game_log_index[PLAYERGAMELOG_STL];
    this.blk = player_game_log_index[PLAYERGAMELOG_BLK];
    this.tov = player_game_log_index[PLAYERGAMELOG_TOV];
    this.pf = player_game_log_index[PLAYERGAMELOG_PF];
    this.pts = player_game_log_index[PLAYERGAMELOG_PTS];
    this.plus_minus = player_game_log_index[PLAYERGAMELOG_PLUS_MINUS];
    this.video_available = player_game_log_index[PLAYERGAMELOG_VIDEO_AVAILABLE];
}
function calculateFptsDay(game) {
    var fg2missed = (((game.fga - game.fg3a) - (game.fgm - game.fg3m)) * FPTS_FG2A_FG2M);
    var fg3missed = ((game.fg3a - game.fg3m) * FPTS_FG3A_FG3M);
    var ftmissed = ((game.fta - game.ftm) * FPTS_FTA_FTM);
    fpts_day = game.pts * FPTS_PTS +
            fg2missed + fg3missed + ftmissed +
            game.reb * FPTS_REB +
            game.ast * FPTS_AST +
            game.stl * FPTS_STL +
            game.blk * FPTS_BLK +
            game.pf * FPTS_PF +
            game.tov * FPTS_TOV;
    return fpts_day.toFixed(2);
}
function calculateFptsTotal(myteam_players) {
    fpts_total_day = 0;
    fpts_total_week = 0;
    for (var i = 0; i < max_players; i++) {
        if (myteam_players[i] != null) {
            fpts_total_day = fpts_total_day + parseFloat(myteam_players[i].fpts_day);
            fpts_total_week = fpts_total_week + parseFloat(myteam_players[i].fpts_week);
        }
    }
    fpts_total_day = fpts_total_day.toFixed(2);
    fpts_total_week = fpts_total_week.toFixed(2);
//    console.log("Total FPTS Day: " + fpts_total_day);
//    console.log("Total FPTS Week: " + fpts_total_week);
}
function calculateWeek(player) {
    var num_games = 0;
    var i = 1;
    var week = Object.assign({}, player.games[0]);
    if (week) {
        num_games++;
        var date = new Date(week.game_date);
        var week_day = date.getDay();
//        console.log(player.display_fi_last);
//        console.log("Game 0 Date: " + date.getDate() + " / " + date.getMonth());
//        console.log(player.games[0]);
        if (week_day == 0)
            (week_day = 6);
        if (player.games[i]) {
            do {
                date = new Date(player.games[i].game_date);
                if (date.getDay() == week_day) {
//                    console.log("Game " + i + " Date: " + week_day);
                    week.fga = week.fga + player.games[i].fga;
                    week.fgm = week.fgm + player.games[i].fgm;
                    week.fg3a = week.fg3a + player.games[i].fg3a;
                    week.fg3m = week.fg3m + player.games[i].fg3m;
                    week.fta = week.fta + player.games[i].fta;
                    week.ftm = week.ftm + player.games[i].ftm;
                    week.pts = week.pts + player.games[i].pts;
                    week.reb = week.reb + player.games[i].reb;
                    week.ast = week.ast + player.games[i].ast;
                    week.stl = week.stl + player.games[i].stl;
                    week.blk = week.blk + player.games[i].blk;
                    week.pf = week.pf + player.games[i].pf;
                    week.tov = week.tov + player.games[i].tov;
                    week.min = week.min + player.games[i].min;
                    num_games++;
                    i++;
//                    console.log("Game this week");
                } else {
                    week_day--;
//                    console.log(week_day);
                }
            } while (week_day > 0 && player.games[i])
        }
        week.fga = (week.fga / num_games).toFixed(2);
        week.fgm = (week.fgm / num_games).toFixed(2);
        week.fg3a = (week.fg3a / num_games).toFixed(2);
        week.fg3m = (week.fg3m / num_games).toFixed(2);
        week.fta = (week.fta / num_games).toFixed(2);
        week.ftm = (week.ftm / num_games).toFixed(2);
        week.pts = (week.pts / num_games).toFixed(2);
        week.reb = (week.reb / num_games).toFixed(2);
        week.ast = (week.ast / num_games).toFixed(2);
        week.stl = (week.stl / num_games).toFixed(2);
        week.blk = (week.blk / num_games).toFixed(2);
        week.pf = (week.pf / num_games).toFixed(2);
        week.tov = (week.tov / num_games).toFixed(2);
        week.min = (week.min / num_games).toFixed(2);
        player.week = week;
        player.fpts_week = calculateFptsDay(week);
    }
}
var player_index = 0;
$(document).on("pageshow", "#init", function () {
    getPlayers(myteam_players_id);
});
function getPlayers(myteam_players_id) {
    var player;
    if (player_index <= max_players - 1) {
        var player_id = myteam_players_id[player_index];
        urlPlayer = "http://stats.nba.com/stats/commonplayerinfo/?PlayerId=" + player_id + "&callback=?";
        urlGames = "http://stats.nba.com/stats/playergamelog/?PlayerId=" + player_id + "&Season=2016-17&SeasonType=Regular+Season&LeagueId=00&callback=?";
        if (player_id) {
            var playerInfo = $.getJSON(urlPlayer, function (data) {
                player = new Player(data.resultSets[0].rowSet[0]);
                var gamesInfo = $.getJSON(urlGames, function (data) {
                    for (var i = 0; i < max_games; i++) {
                        if (data.resultSets[0].rowSet[i]) {
                            var game = new Game(data.resultSets[0].rowSet[i]);
                            player.games[i] = game;
                        }
                    }
                    player.fpts_day = calculateFptsDay(player.games[0]);
                    calculateWeek(player);
                    myteam_players[player_index] = player;
                    player_index++;
                    getPlayers(myteam_players_id);
                });
            });
        } else {
            player_index++;
            getPlayers(myteam_players_id);
        }
    } else {
        //all player done
        player_index = 0;
        $(".inTurnFadingTextG").hide();
        $.mobile.changePage("#myteam", {transition: "slideup"});
        $("#player-list h1").html("League Players");
    }
}
$(document).on("pagebeforeshow", "#myteam", function () {
    calculateFptsTotal(myteam_players);
});
$(document).on("pageshow", "#myteam", function () {
    REMOVE_MODE = 1;
    remove_mode();
    $("#footer-btn-week").removeClass("footer-btn-push");
    $("#footer-btn-last").addClass("footer-btn-push");
    $("#footer-btn-last").attr("onclick", "");
    $("#footer-btn-week").attr("onclick", "onclick_myteam_week()");
    $(".total-fpoints").html('<a>Fantasy Points: ' + fpts_total_day + '</a>');
    for (var i = 0; i < max_players; i++) {
        var id = "player" + (i + 1);
        min_player = $(document.getElementById(id));
        if (myteam_players_id[i] != null) {
            min_player.removeClass("no-remove");
            min_player.attr('onclick', 'onclick_player(this.id)');
            min_player.html('<table><tr><a class="min-player-name">' + myteam_players[i].display_fi_last +
                    '</a></tr><tr><td class="min-player-team">' + myteam_players[i].team_abbreviaton +
                    '</td><td class="min-player-fpoints"><a>' + myteam_players[i].fpts_day +
                    '</a><a class="small-text"> FPts</a></td></tr></table>');
        } else {
            min_player.addClass("no-remove");
            min_player.attr('onclick', 'onclick_empty(this.id)');
            min_player.html('<a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-plus ui-btn-icon-notext ui-btn-inline">Plus</a>');
        }
    }
});
function onclick_player(id) {
    $(".inTurnFadingTextG").show();
    min_player = $(document.getElementById(id));
    if (REMOVE_MODE == 0) {
        onclick_last();
        $.mobile.changePage("#player-stats", {transition: "flip"});
        $(".inTurnFadingTextG").hide();
    } else {
        min_player.addClass("no-remove");
        min_player.attr('onclick', 'onclick_empty(this.id)');
        min_player.html('<a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-plus ui-btn-icon-notext ui-btn-inline">Plus</a>');
        myteam_players_id[min_player.attr('id').replace(/player/, '') - 1] = null;
        myteam_players[min_player.attr('id').replace(/player/, '') - 1] = null;
        localStorage.setItem("myteam_players_id", JSON.stringify(myteam_players_id));
        calculateFptsTotal(myteam_players);
        $(".total-fpoints").html('<a>Fantasy Points: ' + fpts_total_day + '</a>');
        $(".inTurnFadingTextG").hide();
    }
}
function remove_mode() {
    if (REMOVE_MODE == 0) {
        $(".ui-footer-fixed .ui-icon-minus").css("display", "none");
        $(".ui-footer-fixed .ui-icon-check").css("display", "block");
        $(".min-player").css("background-color", "#ffb3b3");
        REMOVE_MODE = 1;
    } else {
        $(".ui-footer-fixed .ui-icon-check").css("display", "none");
        $(".ui-footer-fixed .ui-icon-minus").css("display", "block");
        $(".min-player").css("background-color", "#f9f9f9");
        REMOVE_MODE = 0;
    }
}
function back_btn() {
    $.mobile.changePage("#myteam", {transition: "flip", reverse: true});
}

function onclick_empty(id) {
    min_player = $(document.getElementById(id));
    $(".inTurnFadingTextG").show();
    $.ajax({
        url: url,
        type: 'GET',
        crossDomain: true,
        dataType: 'jsonp',
        success: function (result) {
            if (common_all_players_list == null) {
                $.each(result.resultSets[0].rowSet, function (i, item) {
                    $(".player-list").append('<li><p><a class="player-list-name">' + item[COMMONALLPLAYERS_DISPLAY_LAST_COMMA_FIRST]
                            + '    </a><a class="player-list-team">' + item[COMMONALLPLAYERS_TEAM_ABBREVIATION]
                            + '</a><a href="#" class="ui-btn ui-shadow ui-corner-all ui-icon-plus ui-btn-icon-notext ui-btn-inline" onclick="player_list_add(' + i + ')">Plus</a></p></li>');
                });
                common_all_players_list = result;
            }
            $.mobile.changePage("#player-list", {transition: "flip"});
            $(".inTurnFadingTextG").hide();
        }
    });
}
function player_list_add(i) {
    var player_id = common_all_players_list.resultSets[0].rowSet[i][COMMONALLPLAYERS_PERSON_ID];
    myteam_players_id[min_player.attr('id').replace(/player/, '') - 1] = player_id;
    localStorage.setItem("myteam_players_id", JSON.stringify(myteam_players_id));
    $("#player-list h1").html("Loading...");
    getPlayers(myteam_players_id);
}
function onclick_last() {
    var player = myteam_players[min_player.attr('id').replace(/player/, '') - 1];
    var date = new Date(player.games[0].game_date);
    $(".player-stats").html('<a href="#myteam" data-rel="back" class="ui-btn ui-icon-delete ui-btn-icon-notext ui-corner-all">No text</a><div class="player-stats-header">' +
            '<image class="player-stats-photo" src="http://stats.nba.com/media/players/230x185/' + player.person_id + '.png" alt="player-photo"/>' +
            '<p class="player-stats-name"><a>' + player.display_fi_last +
            '</a></p><p class="player-stats-position"><a>' + player.position +
            '</a></p><p class="player-stats-team"><a>' + player.team_abbreviaton +
            '</a></p></div><table class="player-stats-table1"><tr><td>Pts</td><td>' + player.games[0].pts +
            '</td></tr><tr><td>Reb</td><td>' + player.games[0].reb +
            '</td></tr><tr><td>Ast</td><td>' + player.games[0].ast +
            '</td></tr><tr><td>FGM/A</td><td>' + player.games[0].fgm + '/' + player.games[0].fga +
            '</td></tr><tr><td>FG3M/A</td><td>' + player.games[0].fg3m + '/' + player.games[0].fg3a +
            '</td></tr><tr><td>FTM/A</td><td>' + player.games[0].ftm + '/' + player.games[0].fta +
            '</td></tr></table><table class="player-stats-table2"><tr><td>Blk</td><td>' + player.games[0].blk +
            '</td></tr><tr><td>Stl</td><td>' + player.games[0].stl +
            '</td></tr><tr><td>TO</td><td>' + player.games[0].tov +
            '</td></tr><tr><td>PF</td><td>' + player.games[0].pf +
            '</td></tr><tr><td>Min</td><td>' + player.games[0].min +
            '</td></tr><tr><td>Date</td><td>' + date.getDate() + " / " + date.getMonth() +
            '</td></tr><tr><td></td><td>' + player.games[0].matchup.substr(3) +
            '</td></tr></table><p class="player-stats-fpoints"><a>' + player.fpts_day +
            '</a><a> FPts</a></p>');
    $("#player-stats-last10").removeClass("player-stats-shown");
    $("#player-stats-last").addClass("player-stats-shown");
    $("#player-stats-last").attr("onclick", "");
    $("#player-stats-last10").attr("onclick", "onclick_week()");
}
function onclick_week() {
    var player = myteam_players[min_player.attr('id').replace(/player/, '') - 1];
    var date = new Date(player.games[0].game_date);
    $(".player-stats").html('<a href="#myteam" data-rel="back" class="ui-btn ui-icon-delete ui-btn-icon-notext ui-corner-all">No text</a><div class="player-stats-header">' +
            '<image class="player-stats-photo" src="http://stats.nba.com/media/players/230x185/' + player.person_id + '.png" alt="player-photo"/>' +
            '<p class="player-stats-name"><a>' + player.display_fi_last +
            '</a></p><p class="player-stats-position"><a>' + player.position +
            '</a></p><p class="player-stats-team"><a>' + player.team_abbreviaton +
            '</a></p></div><table class="player-stats-table1"><tr><td>Pts</td><td>' + player.week.pts +
            '</td></tr><tr><td>Reb</td><td>' + player.week.reb +
            '</td></tr><tr><td>Ast</td><td>' + player.week.ast +
            '</td></tr><tr><td>FGM/A</td><td>' + player.week.fgm + '/' + player.week.fga +
            '</td></tr><tr><td>FG3M/A</td><td>' + player.week.fg3m + '/' + player.week.fg3a +
            '</td></tr><tr><td>FTM/A</td><td>' + player.week.ftm + '/' + player.week.fta +
            '</td></tr></table><table class="player-stats-table2"><tr><td>Blk</td><td>' + player.week.blk +
            '</td></tr><tr><td>Stl</td><td>' + player.week.stl +
            '</td></tr><tr><td>TO</td><td>' + player.week.tov +
            '</td></tr><tr><td>PF</td><td>' + player.week.pf +
            '</td></tr><tr><td>Min</td><td>' + player.week.min +
            '</td></tr><tr><td>Date</td><td>' + date.getDate() + " / " + date.getMonth() +
            '</td></tr></table><p class="player-stats-fpoints"><a>' + player.fpts_week +
            '</a><a> FPts</a></p>');
    $("#player-stats-last").removeClass("player-stats-shown");
    $("#player-stats-last10").addClass("player-stats-shown");
    $("#player-stats-last10").attr("onclick", "");
    $("#player-stats-last").attr("onclick", "onclick_last()");
}
function onclick_refresh() {
    $.mobile.changePage("#init",{transition: "slideup"});
}
function onclick_myteam_week() {
    for (var i = 0; i < max_players; i++) {
        var id = "player" + (i + 1);
        min_player = $(document.getElementById(id));
        if (myteam_players_id[i] != null) {
            min_player.removeClass("no-remove");
            min_player.attr('onclick', 'onclick_player(this.id)');
            min_player.html('<table><tr><a class="min-player-name">' + myteam_players[i].display_fi_last +
                    '</a></tr><tr><td class="min-player-team">' + myteam_players[i].team_abbreviaton +
                    '</td><td class="min-player-fpoints"><a>' + myteam_players[i].fpts_week +
                    '</a><a class="small-text"> FPts</a></td></tr></table>');
        }
    }
    $("#footer-btn-last").removeClass("footer-btn-push");
    $("#footer-btn-week").addClass("footer-btn-push");
    $("#footer-btn-week").attr("onclick", "");
    $("#footer-btn-last").attr("onclick", "onclick_myteam_last()");
    $(".total-fpoints").html('<a>Fantasy Points: ' + fpts_total_week + '</a>');
    onclick_week();
}
function onclick_myteam_last() {
    for (var i = 0; i < max_players; i++) {
        var id = "player" + (i + 1);
        min_player = $(document.getElementById(id));
        if (myteam_players_id[i] != null) {
            min_player.removeClass("no-remove");
            min_player.attr('onclick', 'onclick_player(this.id)');
            min_player.html('<table><tr><a class="min-player-name">' + myteam_players[i].display_fi_last +
                    '</a></tr><tr><td class="min-player-team">' + myteam_players[i].team_abbreviaton +
                    '</td><td class="min-player-fpoints"><a>' + myteam_players[i].fpts_day +
                    '</a><a class="small-text"> FPts</a></td></tr></table>');
        }
    }
    $("#footer-btn-week").removeClass("footer-btn-push");
    $("#footer-btn-last").addClass("footer-btn-push");
    $("#footer-btn-last").attr("onclick", "");
    $("#footer-btn-week").attr("onclick", "onclick_myteam_week()");
    $(".total-fpoints").html('<a>Fantasy Points: ' + fpts_total_day + '</a>');
    onclick_last();
}
    
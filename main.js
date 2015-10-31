$(function () {
    var users;
    chrome.storage.sync.get({'users': []},
        function (data) {
            users = data.users;
            $('table').last().find('tr').each(function () {
                for (var i in users) {
                    if ($(this).find('td').eq(1).text().trim() == users[i]) {
                        $(this).css({'background-color': 'yellow'});
                        break;
                    }
                }
            });
        });
    $('table').last().find('tr').on('dblclick', function () {
        var user = $(this).find('td').eq(1).text().trim();
        if (users.indexOf(user) == -1) {
            users.push(user);
            $(this).css({'background-color': 'yellow'});
        } else {
            users.splice(users.indexOf(user), 1);
            $(this).css({'background-color': ''});
        }
        chrome.storage.sync.set({'users': users});
    });
});

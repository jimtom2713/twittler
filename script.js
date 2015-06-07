$(document).ready(function(){
        var $body = $('body');
        // $('div.tweet-section').text('');
        // var currentTweetCounter = 0;
        
        function addTheseTweets(){
          // $('h1').text("Who's your favorite Twitlers?!");
          $('div.twitt-container').text('');
          for(var i=0; i<streams.home.length; i++){
            buildTweet(streams.home[i]);
            // currentTweetCounter++
            // console.log(currentTweetCounter);
          }
          // $('.timestamp').text($.timeago(obj.created_at.toISOString()));
        };

        function buildTweet(obj){
          var $tweetCard = $('<div class=\"twitt '+obj.user+'\"></div>');
          var $tweetText = $('<div class=\'twitt-text\'></div>');
          var $tweetUser = $('<div class=\'twitt-user\'></div>');
          var $timestamp = $('<div class="timestamp"></div>');
          $tweetUser.text('@'+obj.user);
          $tweetText.text(obj.message);
          $timestamp.text($.timeago(obj.created_at.toISOString()));
          $tweetUser.appendTo($tweetCard);
          $tweetText.appendTo($tweetCard);
          $timestamp.appendTo($tweetCard);
          $tweetCard.prependTo($('.twitt-container'));
        };

        function userSpecificTweets(user){
          $('h1').text('Tweets for ' + user);
          $('div.twitt-container').text('');
          for(var i=0; i<streams.users[user].length; i++){
            buildTweet(streams.users[user][i]);
          }
        }
/*
        function countNewTweets(){
          console.log(currentTweetCounter);
          var newTweets = streams.home.length - currentTweetCounter + 1;
          $('.button').text(newTweets + ' new twitts');
        }*/

        addTheseTweets();
        $('.button').on('click',addTheseTweets);
        $('div').on('click','.twitt-user', function(){userSpecificTweets($(this).text().slice(1))});
        window.setInterval(countNewTweets, 1000);
      });
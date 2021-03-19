// state of dictionary will be stored in database
var dictionary = {};

// update the dictionary with a new lyric
function update(lyric) {
    var prev_word = "";
    var word_list = lyric.split(" ");
    for (i = 0; i < word_list.length; i++) {
        var word = word_list[i];
        if (!(prev_word in dictionary)) {
            dictionary[prev_word] = {};
            dictionary[prev_word][word] = 1;
        }
        else {
            if (!(word in dictionary[prev_word])) {
                dictionary[prev_word][word] = 1;
            }
            else {
                dictionary[prev_word][word] += 1;
            }
        }
        prev_word = word;
    }
}

// calculate the probability of a word appears after the other word
function probalility(prev_word, after_word) {
    var total = 0;
    for (k in dictionary[prev_word]) {
        total += dictionary[prev_word][k];
    }
    return dictionary[prev_word][after_word] / total;
}

// randomly generate a new word based on the given word
function generate_word(prev_word) {
    var words = null;
    if (Object.keys(dictionary).indexOf(prev_word) > -1) {
        words = Object.keys(dictionary[prev_word]);
    }
    else {
        words = Object.keys(dictionary[""]);
    }
    var length = words.length;
    var index = Math.floor(Math.random() * length);
    var word = words[index];
    
    return word;
}

// generate a new lyric
function generate_lyric(length) {
    var lyric = "";
    var prev_word = "";
    while (length > 0) {
        word = generate_word(prev_word);
        lyric = lyric + word + " ";
        prev_word = word;
        length -= 1;
    }
    lyric = lyric.slice(0, -1)
    print("new lyric: " + lyric);
    return lyric;
}

function show_dictionary(dic) {
    for (prev_word in dic) {
        for (after_word in dic[prev_word]) {
            print(prev_word + ": " + after_word + ": " + dic[prev_word][after_word]);
        }
    }
}


update("Just stop your crying");
update("It's a sign of the times");
update("Welcome to the final show");
update("Hope you're wearing your best clothes");
update("You can't bribe the door on your way to the sky");
update("You look pretty good down here");
update("But you ain't really good");
update("We never learn we been here before");
update("Why are we always stuck and running from");
update("The bullets the bullets");
update("Just stop your crying");
update("It's a sign of the times");
update("We gotta get away from here");
update("It'll be alright");
update("They told me that the end is near");
update("Have the time of your life");
update("Breaking through the atmosphere");
update("And things are pretty good from here");
update("Remember everything will be alright");
update("We can meet again somewhere");
update("Somewhere far away from here");
update("We don't talk enough");
update("We should open up");
update("Before it's all too much");
update("Will we ever learn");
update("It's just what we know");
update("We gotta get away");


update("Waiting for the time to pass you by");
update("Hope the winds of change will change your mind");
update("I could give a thousand reasons why");
update("And I know you and you've got to");
update("Make it on your own but we don't have to grow up");
update("We can stay forever young");
update("Living on my sofa drinking rum and cola");
update("Underneath the rising sun");
update("But you're going and you know that");
update("All you have to do is stay a minute");
update("Just take your time");
update("The clock is ticking so stay");
update("All you have to is wait a second");
update("Your hands on mine");
update("Won't admit what I already know");
update("I've never been the best at letting go");
update("I don't wanna spend the night alone");
update("Guess I need you and I need to");
update("Underneath the rising sun");
update("I could give a million reasons why");
show_dictionary(dictionary);
generate_lyric(100);
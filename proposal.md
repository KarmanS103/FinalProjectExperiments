Our team is made up of Karman Singh and Xiao Tao and our project idea
is essentially a social media website centered around music. This is
in stark difference to other sites such as Spotify or Apple Music
which are music streaming apps first with a social component on top.
We will not be adding any music streaming functionality to our
application. 

We expect users of this app to primarily be a younger audience in the
age range of 14 to 30 who are interested in keeping up with their
friend’s music interests as well as staying up to date on new music
releases from their favorite artists. With that in mind, we want to
make sure that every feature we add to this application is tailored
specifically to individuals who are very interested in knowing
everything about what’s going on in the music world at all times. A
second type of user that we expect to have may be artists themselves.
It may be possible that artists want to use our application to gauge
how they are doing statistically in the social media world. 

The workflow/user story of these two users are very different from
each other. The first type of user which will be using this
application primarily to interact with their friends and stay updated
on music releases will likely register for a user account, invite
their friends, and then go through the app to look at music and see
what music their friends are enjoying. This is very different from the
second type of user, the artist, who will likely not even register for
an account and instead just go directly to the global leaderboard and
see what their social standing is compared to the rest of the artists.
The main distinction here is the fact that artists will likely not
make an account whereas other users will. 

Whether a user is an artist or just an avid music listener, the
general design of the website will be the same. Users will be able to
login with an email address and password and then be presented with a
list of music artists from around the world. They will then be able to
“follow” different music artists which will then be added to the
user’s feed. User’s will also be able to go through the discography of
different artists and “like” the songs that they enjoy. Additionally,
users will be able to add other users to their “friends list” via
email address which will contain all of the other users of the
application that the current user is friends with. User’s will also be
able to create their own profiles with a profile picture, username,
and top music genres. Another neat feature we intend on supporting is
lyric translation. With the API that we will be using, it is possible
to translate lyrics of songs from English into a variety of other
languages, so users will be able to look at the lyrics of songs in
their native tongue. 

All users will have an individualized feed containing all of the
artists that they follow and any associated albums or singles they
have released. The individualized user feed will also list any
interactions with the application that their friends have done. This
includes any artists that their friends have recently followed as well
as specific songs that their friends choose to like. In addition to
individualized user feeds, there will also be a global user feed which
is updated in real time containing a leaderboard of which artists
currently have the most followers at any time. This global feed will
also show a venmo-esque style of interactions of the app where every
interaction a user makes (likes, follows, etc.) will be shown to all
other users.  

We plan on using the Musixmatch API to build all of the features of
our app. This API provides us with all of the information we need
regarding the musical projects of artists. This includes chart
positions of artists and tracks, track lyrics, artist discographies,
and whole album track lists. This API is also unique in that it allows
us to search for the songs of artists based on title and artist
combinations. This will allow us to easily provide search
functionality to our users. Additionally, the API has the unique
feature of translation so we will also be able to add the option of
being able to translate lyrics to songs in the user’s native language.
To supplement any data gaps, we may face (and if time allows) we may
also use the Genius API which also provides similar functionality
albeit at a much lower quality. 

In addition to the Musixmatch API, we will also be serving an API that
we will create through Elixir to update our persistent state in a
postgres database. The persistent state in this database will include
not only users and passwords, but also information regarding the
interactions between users and artists. To be more specific, we will
need to keep track of which artists users are following, how many
followers each artist has, which songs users like, and which users are
friends with each other. Additionally, we will need to keep track of
user profiles as well and also store user profile pictures. With this
information in our persistent state, we should be able to generate all
of the features we have described previously. 

The real-time behavior that we plan on incorporating into our app is
twofold. Firstly, on the global level between all users, we will have
the global feed which has real-time updates of what all other users
are doing on the app as well as the leaderboard of which musician is
currently in the lead with the most followers. The second real-time
behavior will be music releases. If an artist releases music at
midnight (which is very common) we will need to make sure that our app
is also updated (via the Musixmatch API) to reflect the new
album/single. Another aspect that we may opt to make real-time in the
application is the updating of user feeds with actions from their
friends. At the moment we are unsure whether we went to send these
actions out in real-time to all of the friends of a user or simple
wait until that user refreshes their browser. From a usage
perspective, we don’t see a major difference in either case. 

Having described this app, it may sound as though this project is
likely already built by large music streaming platforms like Spotify,
Apple Music, or Amazon Music. However, none of those companies have an
emphasize on the social aspect of music and don’t include the features
that we plan on including such as the global feed of user interactions
or the artist leaderboards. To further differentiate ourselves from
comparable products, we will also be adding one “neat” feature which
we believe will help increase user interactions with the app. This
neat feature will be lyric generation via Shannon’s method of sentence
generation using a Naïve Bayes language model. With this feature,
users will be able to select an album from an artist and then the
application will build an n-gram language model based on all of the
lyrics of all of the songs in the album. After doing so, the user can
choose how many lyrics they would like to generate (likely capped at
some number) and then the application will generate that number of
lyrics based on the probabilities of each n-gram from the lyrics that
were used for training. After generating these lyrics, users will be
given the option to share the lyrics with their friends or share them
globally if they think they’re really good. By doing this, we will be
significantly differentiating our application from Spotify and Apple
Music and this will allow for more user interactions. Additionally,
this feature would also add more social functionality to the app as
artists could look at lyrics that fans have generate. It’s also
possible that the lyrics actually turn out to be very good and maybe
an artist is born from this web app, who knows. 

In preparation for this project, we ran two different experiments
testing two different core functionalities of our application. The
first was a test aimed at verifying we could get the data that we need
to build the application from the Musixmatch API. To do this, we went
to the Musixmatch website, read through the documentation of their
HTTP requests, got API keys, and built a demo command line application
in Elixir. This simple command line application was intended to simply
make HTTP Get requests to the API on the data that we needed for the
features we described above. In testing, we verified that we were able
to get a single track by its unique identifier, list all tracks by an
artist, get the lyrics for a track, and get all of the albums of a
single artist as well as all of the tracks in a single album. After
doing this experiment, we learned that we can definitely grab the
necessary data for this application as well as parse through the JSON
response from the API and filter out unnecessary data.  

The second experiment that we ran for this application was much more
conceptually difficult. This experiment was for the purpose of
verifying that lyric generation can be performed via a Naïve Bayes
language model. We decided to do this in JavaScript rather than Elixir
as it seemed to be much easier, syntactically speaking, to build the
algorithm in JavaScript. Specifically, the fact that dictionaries and
iteration are present in JavaScript made it much easier to design.
However, if we notice significant problems in terms of runtime, we
will look into shifting pieces of the algorithm to the server side of
the application. To run this experiment, we began by building a
dictionary to keep track of all the words that appeared in the lyrics
that we wrote up. For each word, we recorded tuples of that word as
well as the following word along with a count of how many times the
tuple appeared in the lyrics. Essentially, we were just keeping track
of the counts of all bigrams seen in the training data. After training
the algorithm on a few test lyrics that we wrote, we were able to see
that the model was able to generate the words with the correct bigram
probabilities; however, the lyrics were largely just nonsense. When
generating a new lyric, we recursively generated a new word and based
on the new word, we used it to generate the next word and so on and so
forth until we hit the end of the lyric length. For example, by
training the application on “Hello Alice” and “Hello Bob”, it would
know there are two possible words that may appear after “Hello”, and
each with fifty percent probability. As the total number of words
become larger, the language model became much more complicated. After
running this experiment on about 15 lyrics that we curated ourselves,
we recognized that the bigram language model does not work very well
in lyric generation since we couldn’t guarantee lyrics that are
grammatically correct, and the context may not be related. However, we
did prove the feasibility of using a Naïve Bayes language model to
generate new lyrics and we could modify the algorithm based on the
experiment result. Specifically, we can incorporate other API’s if
time allows such as part-of-speech taggers to make sure that our
lyrics follow correct grammatical structure, and we can also increase
the size of the n-grams that we are training on from 2 up to 3 or even
4. 

Overall, I believe we are very well positioned to accomplish building
all of the features we have listed above. Given the fact that both of
our experiments gave very promising results, we do not see any major
hurdles in the future in terms of design. There will, however, likely
be implementation changes such as with the n-gram language model
possible being moved to the server-side. 
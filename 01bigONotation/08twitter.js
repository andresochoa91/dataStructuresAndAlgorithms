const tweets = [
    {
        tweet: "Hello",
        date: 2012
    },
    {
        tweet: "How are you",
        date: 2014
    },
    {
        tweet: "What's up",
        date: 2016
    }
]

//If I want to know the first and the last tweet, the BigO is O(1 + 1) because we just need to look for every independient value
//but
//If I want to compare every date with the others, the BigO is O(n^2) because we need to nest loops   
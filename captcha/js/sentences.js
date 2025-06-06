function GetSentence(wordList) {
    var list = [];
    const formatString = (template, ...args) => {
        return template.replace(/{([0-9]+)}/g, function (match, index) {
            return typeof args[index] === 'undefined' ? match : args[index];
        });
    }

    list.push("Click on \"Disagree\"");
    list.push("Click on \"Disagree\"");

    switch (wordList.length){
        case 1: 
            list.push(formatString("Kids love {0}s", wordList[0]));
            list.push(formatString("Kids hate {0}s", wordList[0]));
            list.push(formatString("Woman uses {0} everyday", wordList[0]));
            list.push(formatString("Man uses {0} everyday", wordList[0]));
            list.push(formatString("{0} is extremly cheap", wordList[0]));
            list.push(formatString("{0} is extremly expensive", wordList[0]));
            list.push(formatString("{0} is indestructable", wordList[0]));
            list.push(formatString("{0} can be sexy", wordList[0]));
            list.push(formatString("{0} can destroy the world", wordList[0]));
            list.push(formatString("{0}s help with marriage problems", wordList[0]));
            list.push(formatString("Big Mama loves {0}s", wordList[0]));
            list.push(formatString("Big Mama hates {0}s", wordList[0]));
            list.push(formatString("My worst nightmare involves a {0} chasing me through a field", wordList[0]));
            list.push(formatString("You should never trust a {0}", wordList[0]));
            list.push(formatString("You can't trust anyone who doesn't own a {0}", wordList[0]));
            list.push(formatString("Everyone needs a {0} in their life", wordList[0]));
            list.push(formatString("The world would be better without {0}s", wordList[0]));
            list.push(formatString("Life is basically just one big {0}", wordList[0]));
            list.push(formatString("Every home should have at least one {0}", wordList[0]));
            list.push(formatString("{0}s should be allowed to vote", wordList[0]));
            list.push(formatString("{0}s are the reason we can't have nice things", wordList[0]));
            list.push(formatString("Never kiss {0}s in public", wordList[0]));
            list.push(formatString("Never trust a smiling {0}", wordList[0]));
            list.push(formatString("In an image with random positioned stars I saw: {0}", wordList[0]));
            break;
        case 2:
            list.push(formatString("{0} is more valuable than {1}", wordList[0], wordList[1]));
            list.push(formatString("{0} is less valuable than {1}", wordList[0], wordList[1]));
            list.push(formatString("{0} can destroy {1}", wordList[0], wordList[1]));
            list.push(formatString("{0} can be influenced by {1}s", wordList[0], wordList[1]));
            list.push(formatString("{0} will make {1}s better", wordList[0], wordList[1]));
            list.push(formatString("{0} eats {1}", wordList[0], wordList[1]));
            list.push(formatString("{0} beats {1}", wordList[0], wordList[1]));
            list.push(formatString("{0}s love {1}s", wordList[0], wordList[1]));
            list.push(formatString("{0}s hate {1}s", wordList[0], wordList[1]));
            list.push(formatString("{0} can't be in a room with {1}", wordList[0], wordList[1]));
            list.push(formatString("{0} + {1} = worlds end", wordList[0], wordList[1]));
            list.push(formatString("{0} and {1} rhymes", wordList[0], wordList[1]));
            list.push(formatString("{0}s are {1}s best friend", wordList[0], wordList[1]));
            list.push(formatString("Never trust a {0} with a {1}", wordList[0], wordList[1]));
            list.push(formatString("{0}s are better than {1}", wordList[0], wordList[1]));
            list.push(formatString("If you have a {0}, you don't need a {1}", wordList[0], wordList[1]));
            list.push(formatString("The government is secretly run by {0}s and {1}s", wordList[0], wordList[1]));
            list.push(formatString("In an image with random positioned stars I saw: {0} and {1}", wordList[0], wordList[1]));
            break;
        case 3:
            list.push(formatString("{0} + {1} = {2}", wordList[0], wordList[1], wordList[2]));
            list.push(formatString("{0} + {1} = extrem {2}", wordList[0], wordList[1], wordList[2]));
            list.push(formatString("{0} + {1} = poorly made {2}", wordList[0], wordList[1], wordList[2]));
            list.push(formatString("Only {0}s and {1}s can defeat {2}", wordList[0], wordList[1], wordList[2]));
            list.push(formatString("{0}, {1} and {2} rhymes", wordList[0], wordList[1], wordList[2]));
            list.push(formatString("{0}, {1} and {2} together cures cancer", wordList[0], wordList[1], wordList[2]));
            list.push(formatString("{0}, {1} and {2} brings worldpeace", wordList[0], wordList[1], wordList[2]));
            list.push(formatString("A {0}, a {1}, and a {2} should never be mixed.", wordList[0], wordList[1], wordList[2]));
            list.push(formatString("In an image with random positioned stars I saw: {0}, {1} and {2}", wordList[0], wordList[1], wordList[2]));
            break;
    }

    return list[Math.floor(Math.random() * list.length)];
}

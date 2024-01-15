// Given a string s, find the length of the longest substring without repeating characters.

const longestSubstring = (string : string) => {
        
    const strArray : string[] = Array.from(string)
    let subString : string = ''
    
    let possibleSubStrings : string [] = []


    strArray.forEach((letter)=>{
        
        if (subString.includes(letter)) {
            possibleSubStrings.push(subString)
            subString = '' 
            subString += letter
            return
        }

        subString += letter

     }
    )

    possibleSubStrings.push(subString)

    const lengthOfSubstrings : number[] = possibleSubStrings.map( (subString)=> subString.length )


    console.log('posibles: ',possibleSubStrings)
    return Math.max(...lengthOfSubstrings);
}

longestSubstring('auu')
longestSubstring('f')
longestSubstring('')
longestSubstring('abcabcbb')
longestSubstring("pwwkew")




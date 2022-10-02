function isconsists(srcString, charsQuery) {
        if (srcString.startsWith(charsQuery)) {
            return true 
        } else {
            return false
        }
    }
console.log(isconsists("andrew", "an"))
const HackerEffect = (event: any) => {
    // the element that will be modified
    // it needs to be type casted into HTMLInputElement
    // for typescript to stop screaming
    const item = (event.target as HTMLInputElement);

    // original text that was in the link
    const original = item.dataset.text;

    // prefix to add
    // it is //😸
    const prefix = "// ";

    // all the letters and whatever I feel like
    const letters = "abcdefghijklmnopqrstuvwxyz0123456789@#$%&";

    // number of iterations it has gone through
    let iteration = 0;

    // create an interval and save it
    // runs every 30ms
    const interval = setInterval(() => {
        item.innerText = prefix + original.split("")
            .map((_, index)=>{
                if (index < iteration) {
                    return original[index];
                }
                return letters[Math.floor(Math.random() * letters.length)]
            })
            .join("");

            if(iteration >= original.length){ 
                clearInterval(interval);
            }

            iteration += 1/3;
    }, 30)
}

export default HackerEffect;
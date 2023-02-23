export default function({
    url,
    title,
    text
}) {
    if (navigator.share) {
        try {
          await navigator
            .share({
                url,
                title,
                text
            })
        } catch (error) {
          console.log(`Oops! I couldn't share to the world because: ${error}`);
        }
    } else {
    console.log(
        "Web share is currently not supported on this browser. Please provide a callback"
    );
    }

}
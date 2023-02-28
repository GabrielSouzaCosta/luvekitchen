export default async function({
    url,
    title,
    text
}) {
    if (navigator.share) {
        await navigator
        .share({
            url,
            title,
            text
        })
    }
}
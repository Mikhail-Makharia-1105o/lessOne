const timeeee = (sec) => {
    hours = Math.floor(sec/3600);
    minutes = Math.floor((sec%3600)/60);
    seconds = Math.floor((sec%3600)%60);
    return hours + " ч " + minutes + " мин " + seconds + " с";
}
module.exports = {
  format_date: (date) => {
    let newDate = new Date(date);
    return new Date(date).toISOString().split("T")[0];
  },
  post_review: (post) => {
    // grab first 50 words
  }
}

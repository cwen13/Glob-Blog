module.exports = {
  format_date: (date) => {
    let newDate = new Date(date);
    return new Date(date).toISOString().split("T")[0];
  },
  post_preview: (post) => {
    return post.split(" ").slice(0,25).join(" ");;
  }
}

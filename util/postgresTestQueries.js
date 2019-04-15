module.exports = {
  readAllCommentsQuery: 'SELECT * FROM comments where songId = 500',

  readAllCommentsStringQuery: 'SELECT * FROM comments WHERE stringId = "songname500"',

  readNumberOfCommentsQuery: 'SELECT COUNT(*) FROM comments where songId = 400',

  readNumberOfCommentsStringQuery: 'SELECT COUNT(*) FROM comments where songId = "songname400"',

  writeNewComment: `INSERT INTO comments (songId, profilePic, username, message, postedAt, songTime, followers)
  VALUES  ( ?,?,?,?,?,?,?)`,

  updateCommentQuery: `UPDATE comments
                      SET message = ('this is the new message')
                      WHERE id = 1`,
                                  
  deleteCommentQuery: 'DELETE FROM comments WHERE id = (?)',
};


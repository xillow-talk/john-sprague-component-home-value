module.exports = {
  readAllCommentsQuery: 'SELECT * FROM comments where songId = (?)',
  readAllCommentsStringQuery: 'SELECT * FROM comments WHERE songId = (?)',
  readNumberOfCommentsQuery: 'SELECT COUNT(*) FROM comments where songId = (?)',
  readNumberOfCommentsStringQuery: 'SELECT COUNT(*) FROM comments where songId = (?)',
  writeNewComment: `INSERT INTO comments (songId, profilePic, username, message, postedAt, songTime, followers)
  VALUES  ( ?,?,?,?,?,?,?)`,
  updateCommentQuery: `UPDATE comments
  SET message = (?)
  WHERE id = (SELECT id 
              FROM (SELECT * 
                    FROM comments
                    ) AS A
              WHERE message = (?)
              )`,
  deleteCommentQuery: 'DELETE FROM comments WHERE id = (?)',
};

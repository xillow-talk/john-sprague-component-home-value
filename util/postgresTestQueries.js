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


INSERT INTO comments (songId, stringId, profilePic, username, message, postedAt, songTime, followers)
VALUES (2597659, 'songname3763779', 'https:s3.amazonaws.com/cloud-vibes-comments/large10.jpg', 'officia', 'Enim in est sunt voluptate laboris commodo tempor.',
        '2019-03-05T20:32:22-08:00', '3:52', 7434);

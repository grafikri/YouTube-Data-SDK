test("PlayList list", async () => {
  const youtube = new YouTube()
  youtube.setApiKey(process.env.API_KEY)
  const listData = await youtube.playlist.list({
    channelId: process.env.CHANNEL_ID,
    part: "contentDetails, snippet",
    limit: "1"
  })
  expect(listData.status).toBe(200)
})

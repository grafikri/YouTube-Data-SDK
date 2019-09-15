import Youtube from "../../dist"

test("PlayList list", async () => {
  const youtube = new Youtube()
  youtube.setApiKey(process.env.API_KEY!)
  const listData = await youtube.playlist.list({
    channelId: process.env.CHANNEL_ID!,
    part: "contentDetails, snippet",
    limit: "1"
  })

  expect((listData as any).status).toBe(200)
})

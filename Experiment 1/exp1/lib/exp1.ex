defmodule Exp1 do

  # Searching an artist based on their name
  def search_track do
  apikey = ""

  resp = HTTPoison.get!("http://api.musixmatch.com/ws/1.1/track.search?apikey=#{apikey}&q_artist=justin%20bieber&page_size=3&page=1&s_track_rating=desc")
  data = Jason.decode!(resp.body)
  data["message"]["body"]["track_list"]
  end

  # Gettting a specific artist by their ID
  def get_artist do
  apikey = ""

  resp = HTTPoison.get!("http://api.musixmatch.com/ws/1.1/artist.get?apikey=#{apikey}&artist_id=118")
  data = Jason.decode!(resp.body)
  data["message"]["body"]["artist"]["artist_alias_list"]
  end

  # Gettting the lyrics to a specifc song
  def get_lyrics do
  apikey = ""

  resp = HTTPoison.get!("http://api.musixmatch.com/ws/1.1/track.lyrics.get?apikey=#{apikey}&track_id=15953433")
  data = Jason.decode!(resp.body)
  data["message"]["body"]["lyrics"]["lyrics_body"]
  end

  # Gettting a specific album
  def get_album do
  apikey = ""

  resp = HTTPoison.get!("http://api.musixmatch.com/ws/1.1/album.get?apikey=#{apikey}&album_id=14250417")
  data = Jason.decode!(resp.body)
  data["message"]["body"]["album"]["album_name"]
  end
end


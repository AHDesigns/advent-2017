# passphrase
# instead of password
# no duplicate words
defmodule Passphrase do
    def read do
        {:ok, body} = File.read("3_data.txt")
        arr = String.split(body, "\n")
        arr
        |> Enum.chunk(2)
        
        IO.inspect arr
    end
end

Passphrase.read

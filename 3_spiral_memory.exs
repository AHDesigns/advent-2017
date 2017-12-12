#moddule_name.ex
defmodule ModuleName do
    def hello do
        IO.puts calc(1)
        IO.puts calc(2)
        IO.puts calc(3)
        IO.puts calc(4)
    end

    def calc(x) do
        1 + ((x-1)*8) + (x*8)
    end
end

defmodule NucleotideCount do
    @nucleotides [?A, ?C, ?G, ?T]

    def count(strand, nucleotide) when nucleotide in(@nucleotides) do
        Enum.count strand, &(&1 == nucleotide)
    end

    def count(_strand, _nucleotide), do: raise ArgumentError

    def histogram(strand) do
        Enum.map(@nucleotides, &{&1, count(strand, &1)}) |> Enum.into(%{})
    end
end


ModuleName.hello


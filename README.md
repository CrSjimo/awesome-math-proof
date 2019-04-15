# awesome-math-proof
Make math proof(in Chinese) more professional

## Get Started

Install by npm:

```bash
npm install awesome-math-proof -g
```

Create a file `test_in.txt`, and type in a math proof:

```
∵ AB = AC,
∴ ∠B = ∠C,
∵ AD ⊥ BC,
∴ D为BC中点, AD平分∠BAC,
∴ ∠1 = ∠2,
∵ 在△BAD与△CAD中
    ∠B = ∠C,
    AB = AC,
    ∠1 = ∠2,
∴ △BAD ≌ △CAD (ASA)
```

run:

```bash
math-proof -p ./test_in.txt -o ./test_out.txt
cat ./test_out.txt
```

output example:

```
∵ AB = AC,
故 ∠B = ∠C,
∵ AD ⊥ BC,
易证 D为BC中点, AD平分∠BAC,
可得 ∠1 = ∠2,
∵ 在△BAD与△CAD中
    ∠B = ∠C,
    AB = AC,
    ∠1 = ∠2,
=> △BAD ≌ △CAD (ASA)
```

## Usage

```bash
math-proof [options]
```

options:

| Option                    | Description                                                  |
| ------------------------- | ------------------------------------------------------------ |
| `-p,--path<inputPath>`    | Input file path                                              |
| `-o,--output[outputPath]` | Output file path, output to console without output option    |
| `--tex`                   | Parse LaTeX `\therefore` token(LaTeX mode auto enabled when input file with extension name `.tex`) |

## Copyright

(c) Crindzebra Sjimo, open-source under [WTFPL License](./LICENSE)
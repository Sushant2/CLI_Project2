# `wcat` - CLI command

>It is used to display or make a copy content of one or more fils in the terminal

## Tasks:

- [ ] `wcat filepath` => dispaly content of the file in the terminal
- [ ] `wcat filepath1 filepath2 filepath3...` => displays content of all the files in the terminal(concatenated form) in the given order
- [ ] `wcat -s filepath` => convert big line breaks into a singular line break(removes large spacing to single line spacing)
- [ ] `wcat -n filepath` => give numbering to all the lines
- [ ] `wcat -b filepath` => give numbering to non-empty lines
- [ ] `wcat filepath` > filename2path => put all the content of filename to filename2 by overriding and also creates filename2 if it doesn't exist
- [ ] `wcat filename >> filename2` => append/copy all the content of filename into filename2
- [ ] `node wcat -s filename > filename2` => if file already exist, get the file content of filename remove large spaces and save the output in filename2

### We can mix & match the options
    - For e.g,  `wcat -s filepath1 filepath2`
    - For e.g, `wcat -n -s filepath1 filepath2`
    - Order does not matter,if we put -s/-n/-b in front or back

## Edge Cases:

- If file entered is not foun, then it gives file does not exist
- -n & -b are 2 options available together, then command should give you an error
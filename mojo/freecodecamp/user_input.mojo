from python import Python

fn main() raises:
    let py = Python.import_module('builtins')
    let user_input = py.input('what is your favourite colour?')
    print('your favourite colour is...', user_input)     
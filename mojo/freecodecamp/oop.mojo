struct Banana:
    var ripe: Bool
    var length: Float16
    var colour: String

    fn __init__(
        inout self, 
        ripe: Bool, 
        length: Float16, 
        colour: String):
    
        self.ripe = ripe
        self.length = length
        self.colour = colour

    fn get_ripe(self) -> Bool:
        return self.ripe

    fn get_length(self) -> Float16:
        return self.length

fn main():
    let banana = Banana(False, 4.7, 'green')        
    print(banana.get_ripe()) 
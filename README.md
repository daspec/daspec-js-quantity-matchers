Quantity units matchers for DaSpec, allowing you to compare quantities using different units, with the help of the excellent
[JS-Quantities](https://github.com/gentooboontoo/js-quantities) library.

# Examples

    expect(actualLength).quantityToEqual('10km')
    expect(actualArea).quantityToBeLessThan('10m^2')
    expect(actualWeight).quantityToBeGreaterThan('3kg')
    expect(actualSpeed).quantityToBeLessThan('10 m/s')
    expect(actualHeight).quantityToBeGreaterThanOrEqual('10 ft')

# Installation

Install the quantity matchers using NPM:
    
    npm install daspec-quantity-matchers --save-dev

Add the `daspec-quantity-matchers` to the `--matchers` argument when you run `daspec` from the command line:

    daspec --specs ... --steps ... --matchers daspec-quantity-matchers

Alternatively, set the `matchers` key in your `daspec.json` config file:

    {
      ...
      "matchers": [... , "daspec-quantity-matchers"],
      ...
    }
   
To see these matchers in action, see the [DaSpec NPM Example](https://github.com/daspec/daspec-js-npm-example) project. 

For an explanation of the syntax for defining custom matchers, see [Custom Matchers](http://daspec.com/guides/custom_matcher.html) in the DaSpec guide.

For more information on configuring the DaSpec Node runner, see [http://daspec.com/guides/install.html](http://daspec.com/guides/install.html)

const data = [{ "name": "Bitcoin", "unit": "BTC", "value": 1, "type": "crypto" }, { "name": "Ether", "unit": "ETH", "value": 13.293, "type": "crypto" }, { "name": "Litecoin", "unit": "LTC", "value": 366.608, "type": "crypto" }, { "name": "Bitcoin Cash", "unit": "BCH", "value": 180.477, "type": "crypto" }, { "name": "Binance Coin", "unit": "BNB", "value": 72.021, "type": "crypto" }, { "name": "EOS", "unit": "EOS", "value": 18651.587, "type": "crypto" }, { "name": "XRP", "unit": "XRP", "value": 44540.14, "type": "crypto" }, { "name": "Lumens", "unit": "XLM", "value": 184124.5, "type": "crypto" }, { "name": "Chainlink", "unit": "LINK", "value": 2887.99, "type": "crypto" }, { "name": "Polkadot", "unit": "DOT", "value": 3216.743, "type": "crypto" }, { "name": "Yearn.finance", "unit": "YFI", "value": 2.508, "type": "crypto" }, { "name": "US Dollar", "unit": "$", "value": 20875.424, "type": "fiat" }, { "name": "United Arab Emirates Dirham", "unit": "DH", "value": 76674.388, "type": "fiat" }, { "name": "Argentine Peso", "unit": "$", "value": 3243684.238, "type": "fiat" }, { "name": "Australian Dollar", "unit": "A$", "value": 32121.891, "type": "fiat" }, { "name": "Bangladeshi Taka", "unit": "৳", "value": 2186735.78, "type": "fiat" }, { "name": "Bahraini Dinar", "unit": "BD", "value": 7869.617, "type": "fiat" }, { "name": "Bermudian Dollar", "unit": "$", "value": 20875.424, "type": "fiat" }, { "name": "Brazil Real", "unit": "R$", "value": 111182.299, "type": "fiat" }, { "name": "Canadian Dollar", "unit": "CA$", "value": 28287.765, "type": "fiat" }, { "name": "Swiss Franc", "unit": "Fr.", "value": 20592.896, "type": "fiat" }, { "name": "Chilean Peso", "unit": "CLP$", "value": 19779464.276, "type": "fiat" }, { "name": "Chinese Yuan", "unit": "¥", "value": 149739.416, "type": "fiat" }, { "name": "Czech Koruna", "unit": "Kč", "value": 508169.382, "type": "fiat" }, { "name": "Danish Krone", "unit": "kr.", "value": 154223.123, "type": "fiat" }, { "name": "Euro", "unit": "€", "value": 20734.514, "type": "fiat" }, { "name": "British Pound Sterling", "unit": "£", "value": 17975.305, "type": "fiat" }, { "name": "Hong Kong Dollar", "unit": "HK$", "value": 163869.239, "type": "fiat" }, { "name": "Hungarian Forint", "unit": "Ft", "value": 8476694.224, "type": "fiat" }, { "name": "Indonesian Rupiah", "unit": "Rp", "value": 323765196.018, "type": "fiat" }, { "name": "Israeli New Shekel", "unit": "₪", "value": 72928.502, "type": "fiat" }, { "name": "Indian Rupee", "unit": "₹", "value": 1712797.124, "type": "fiat" }, { "name": "Japanese Yen", "unit": "¥", "value": 3058380.093, "type": "fiat" }, { "name": "South Korean Won", "unit": "₩", "value": 29484107.056, "type": "fiat" }, { "name": "Kuwaiti Dinar", "unit": "KD", "value": 6456.559, "type": "fiat" }, { "name": "Sri Lankan Rupee", "unit": "Rs", "value": 7587534.116, "type": "fiat" }, { "name": "Burmese Kyat", "unit": "K", "value": 43445113.9, "type": "fiat" }, { "name": "Mexican Peso", "unit": "MX$", "value": 414745.159, "type": "fiat" }, { "name": "Malaysian Ringgit", "unit": "RM", "value": 98845.132, "type": "fiat" }, { "name": "Nigerian Naira", "unit": "₦", "value": 9123604.076, "type": "fiat" }, { "name": "Norwegian Krone", "unit": "kr", "value": 214087.284, "type": "fiat" }, { "name": "New Zealand Dollar", "unit": "NZ$", "value": 35790.538, "type": "fiat" }, { "name": "Philippine Peso", "unit": "₱", "value": 1215388.188, "type": "fiat" }, { "name": "Pakistani Rupee", "unit": "₨", "value": 4580589.919, "type": "fiat" }, { "name": "Polish Zloty", "unit": "zł", "value": 98545.57, "type": "fiat" }, { "name": "Russian Ruble", "unit": "₽", "value": 1279141.607, "type": "fiat" }, { "name": "Saudi Riyal", "unit": "SR", "value": 78461.512, "type": "fiat" }, { "name": "Swedish Krona", "unit": "kr", "value": 226851.249, "type": "fiat" }, { "name": "Singapore Dollar", "unit": "S$", "value": 29340.575, "type": "fiat" }, { "name": "Thai Baht", "unit": "฿", "value": 788047.257, "type": "fiat" }, { "name": "Turkish Lira", "unit": "₺", "value": 388339.25, "type": "fiat" }, { "name": "New Taiwan Dollar", "unit": "NT$", "value": 670138.729, "type": "fiat" }, { "name": "Ukrainian hryvnia", "unit": "₴", "value": 764072.062, "type": "fiat" }, { "name": "Venezuelan bolívar fuerte", "unit": "Bs.F", "value": 2090.256, "type": "fiat" }, { "name": "Vietnamese đồng", "unit": "₫", "value": 518644203.546, "type": "fiat" }, { "name": "South African Rand", "unit": "R", "value": 374672.215, "type": "fiat" }, { "name": "IMF Special Drawing Rights", "unit": "XDR", "value": 14858.667, "type": "fiat" }, { "name": "Silver - Troy Ounce", "unit": "XAG", "value": 1068.972, "type": "commodity" }, { "name": "Gold - Troy Ounce", "unit": "XAU", "value": 12.521, "type": "commodity" }, { "name": "Bits", "unit": "μBTC", "value": 1000000, "type": "crypto" }, { "name": "Satoshi", "unit": "sats", "value": 100000000, "type": "crypto" }]
export default data;
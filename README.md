# Kenya Public Data API

A free public REST API serving Kenya public data — counties, banks, M-Pesa paybills, and public holidays.

No authentication required. Free to use.

## Base URL
https://kenya-api-90wq.onrender.com
## Endpoints

### Counties

**Get all counties**
## Endpoints

### Counties

**Get all counties**
**Filter by region**
GET /api/counties?region=Nairobi
GET /api/counties?region=Coast
GET /api/counties?region=Rift Valley
**Get county by code**
**Get county by code**
**Example response:**
```json
{
  "count": 47,
  "data": [
    {
      "code": 1,
      "name": "Mombasa",
      "capital": "Mombasa",
      "region": "Coast"
    }
  ]
}
```

---

### Banks

**Get all banks**GET /api/banks
**Search by name**
GET /api/banks?search=equity
GET /api/banks?search=kcb
**Get bank by code**
**Get bank by code**
**Example response:**
```json
{
  "count": 1,
  "data": [
    {
      "code": "49",
      "name": "Equity Bank Kenya",
      "shortname": "Equity",
      "swift": "EQBLKENX"
    }
  ]
}
```

---

### M-Pesa Paybills

**Get all paybills**
GET /api/mpesa/paybills

**Filter by category**
GET /api/mpesa/paybills?category=Government
GET /api/mpesa/paybills?category=Banking
GET /api/mpesa/paybills?category=Utilities
**Get paybill by number**
GET /api/mpesa/paybills/400200
**Get all categories**
GET /api/mpesa/categories

**Example response:**
```json
{
  "count": 4,
  "data": [
    {
      "number": "990099",
      "name": "KRA iTax",
      "category": "Government"
    }
  ]
}
```

---

### Public Holidays

**Get all holidays**
**Filter by type**GET /api/holidays?type=National Holiday
GET /api/holidays?type=Public Holiday**Example response:**
```json
{
  "count": 13,
  "data": [
    {
      "date": "12-12",
      "name": "Jamhuri Day",
      "type": "National Holiday"
    }
  ]
}
```

---

## Regions

Kenya has 8 regions:

- Nairobi
- Coast
- North Eastern
- Eastern
- Central
- Rift Valley
- Western
- Nyanza

---

## Usage Example

```javascript
// Get all Nairobi counties
const res = await fetch('https://kenya-api-90wq.onrender.com/api/counties?region=Nairobi');
const data = await res.json();
console.log(data);
```

```python
import requests
res = requests.get('https://kenya-api-90wq.onrender.com/api/counties?region=Coast')
print(res.json())
```

---

## Roadmap

- Constituencies data
- Ward data
- Universities and colleges
- Hospitals and health facilities
- Currency exchange rates
- Rate limiting and API keys

## Author

Carter - Full-stack developer
GitHub: https://github.com/Carter254g

## License

MIT

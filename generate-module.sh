# run script => generate-module.sh <module-name> Linux/mac only
if [ -z "$1" ]; then
  echo "Usage: $0 <module-name>"
  exit 1
fi

# Create the module directory
module_dir="./src/modules/$1"
mkdir -p "$module_dir"
mkdir -p "$module_dir/controllers"
mkdir -p "$module_dir/models"
mkdir -p "$module_dir/routes"
mkdir -p "$module_dir/services"
mkdir -p "$module_dir/tests"

# Generate files route
route="Route.js"
touch "$module_dir/routes/$1$route"
echo "import express from 'express'" > "$module_dir/routes/$1$route"
echo "const router = express.Router();" >> "$module_dir/routes/$1$route"
echo "const authenticateToken = require('../../../settings/middleware/token');" >> "$module_dir/routes/$1$route"
echo "" >> "$module_dir/routes/$1$route"
echo "// write route in here" >> "$module_dir/routes/$1$route"
echo "" >> "$module_dir/routes/$1$route"
echo "" >> "$module_dir/routes/$1$route"
echo "" >> "$module_dir/routes/$1$route"
echo "module.exports = router;" >> "$module_dir/routes/$1$route"

touch "$module_dir/controllers/${1}Controller.js"
touch "$module_dir/models/${1}Model.js"
touch "$module_dir/services/${1}Service.js"
touch "$module_dir/tests/${1}.test.js"

echo "Module '$1' created successfully."

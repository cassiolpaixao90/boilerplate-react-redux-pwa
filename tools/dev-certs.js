const chalk                     = require('chalk')
const fs                        = require('fs')
const path                      = require('path')
const getDevelopmentCertificate = require('devcert-with-localhost').default;
const private_folder_path       = path.join(__dirname, '..', 'certs');
const cert_key_path             = path.join(private_folder_path, 'key.pem');
const cert_path                 = path.join(private_folder_path, 'cert.pem');

if (fs.existsSync(cert_path)) {
  process.stdout.write(chalk.yellow('Existing certificate found') + chalk.dim(' – Replacing\n'));
  fs.unlinkSync(cert_path);
}
if (fs.existsSync(cert_key_path)) {
  process.stdout.write(chalk.yellow('Existing private key found') + chalk.dim(' – Replacing\n'));
  fs.unlinkSync(cert_key_path);
}

process.stdout.write(chalk.yellow('Generating certificates'));
getDevelopmentCertificate('pwa-service-worker', {installCertutil: true})
  .then(({key, cert}) => {
    process.stdout.write(chalk.dim(' – ') + chalk.green.bold('Success!\n'));
    fs.writeFileSync(cert_path, cert);
    fs.writeFileSync(cert_key_path, key);
    fs.chmodSync(cert_path, '0400');
    fs.chmodSync(cert_key_path, '0400');
    process.exit(0);
  })
  .catch(err => {
    process.stderr.write(chalk.red(
        `Issue generating certificates. Please consult the "Manually Generating Certificates" section of the README\n${err}\n`,
      ),
    );
    process.exit(1);
  });
